import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy510 } from '../generated/copy/copy510';
import { layout510 } from '../generated/layouts/layout510';
import { palette510 } from '../generated/palettes/palette510';

const RuntimeView510 = withUniwind(View);

export function Screen510() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView510 styleClassName={layout510.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy510.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy510.detail} / {palette510.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
