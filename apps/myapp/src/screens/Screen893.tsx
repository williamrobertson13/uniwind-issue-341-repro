import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy893 } from '../generated/copy/copy893';
import { layout893 } from '../generated/layouts/layout893';
import { palette893 } from '../generated/palettes/palette893';

const RuntimeView893 = withUniwind(View);

export function Screen893() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView893 styleClassName={layout893.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy893.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy893.detail} / {palette893.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
