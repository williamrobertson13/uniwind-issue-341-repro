import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1106 } from '../generated/copy/copy1106';
import { layout1106 } from '../generated/layouts/layout1106';
import { palette1106 } from '../generated/palettes/palette1106';

const RuntimeView1106 = withUniwind(View);

export function Screen1106() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1106 styleClassName={layout1106.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1106.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1106.detail} / {palette1106.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
