import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1330 } from '../generated/copy/copy1330';
import { layout1330 } from '../generated/layouts/layout1330';
import { palette1330 } from '../generated/palettes/palette1330';

const RuntimeView1330 = withUniwind(View);

export function Screen1330() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1330 styleClassName={layout1330.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1330.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1330.detail} / {palette1330.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
