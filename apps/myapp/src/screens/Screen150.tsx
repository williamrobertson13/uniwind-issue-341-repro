import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy150 } from '../generated/copy/copy150';
import { layout150 } from '../generated/layouts/layout150';
import { palette150 } from '../generated/palettes/palette150';

const RuntimeView150 = withUniwind(View);

export function Screen150() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView150 styleClassName={layout150.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy150.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy150.detail} / {palette150.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
