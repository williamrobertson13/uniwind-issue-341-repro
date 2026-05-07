import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy286 } from '../generated/copy/copy286';
import { layout286 } from '../generated/layouts/layout286';
import { palette286 } from '../generated/palettes/palette286';

const RuntimeView286 = withUniwind(View);

export function Screen286() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView286 styleClassName={layout286.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy286.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy286.detail} / {palette286.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
