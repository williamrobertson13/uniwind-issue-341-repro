import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy317 } from '../generated/copy/copy317';
import { layout317 } from '../generated/layouts/layout317';
import { palette317 } from '../generated/palettes/palette317';

const RuntimeView317 = withUniwind(View);

export function Screen317() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView317 styleClassName={layout317.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy317.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy317.detail} / {palette317.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
