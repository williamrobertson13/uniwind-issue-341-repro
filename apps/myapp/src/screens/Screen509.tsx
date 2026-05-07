import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy509 } from '../generated/copy/copy509';
import { layout509 } from '../generated/layouts/layout509';
import { palette509 } from '../generated/palettes/palette509';

const RuntimeView509 = withUniwind(View);

export function Screen509() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView509 styleClassName={layout509.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy509.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy509.detail} / {palette509.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
