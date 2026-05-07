import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy445 } from '../generated/copy/copy445';
import { layout445 } from '../generated/layouts/layout445';
import { palette445 } from '../generated/palettes/palette445';

const RuntimeView445 = withUniwind(View);

export function Screen445() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView445 styleClassName={layout445.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy445.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy445.detail} / {palette445.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
