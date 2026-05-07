import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1370 } from '../generated/copy/copy1370';
import { layout1370 } from '../generated/layouts/layout1370';
import { palette1370 } from '../generated/palettes/palette1370';

const RuntimeView1370 = withUniwind(View);

export function Screen1370() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1370 styleClassName={layout1370.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1370.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1370.detail} / {palette1370.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
