import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1130 } from '../generated/copy/copy1130';
import { layout1130 } from '../generated/layouts/layout1130';
import { palette1130 } from '../generated/palettes/palette1130';

const RuntimeView1130 = withUniwind(View);

export function Screen1130() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1130 styleClassName={layout1130.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1130.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1130.detail} / {palette1130.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
