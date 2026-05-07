import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy389 } from '../generated/copy/copy389';
import { layout389 } from '../generated/layouts/layout389';
import { palette389 } from '../generated/palettes/palette389';

const RuntimeView389 = withUniwind(View);

export function Screen389() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView389 styleClassName={layout389.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy389.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy389.detail} / {palette389.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
