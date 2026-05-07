import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1114 } from '../generated/copy/copy1114';
import { layout1114 } from '../generated/layouts/layout1114';
import { palette1114 } from '../generated/palettes/palette1114';

const RuntimeView1114 = withUniwind(View);

export function Screen1114() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1114 styleClassName={layout1114.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1114.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1114.detail} / {palette1114.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
