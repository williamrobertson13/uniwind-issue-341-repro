import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1366 } from '../generated/copy/copy1366';
import { layout1366 } from '../generated/layouts/layout1366';
import { palette1366 } from '../generated/palettes/palette1366';

const RuntimeView1366 = withUniwind(View);

export function Screen1366() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1366 styleClassName={layout1366.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1366.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1366.detail} / {palette1366.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
