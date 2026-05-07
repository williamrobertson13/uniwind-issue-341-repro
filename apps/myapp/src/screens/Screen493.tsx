import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy493 } from '../generated/copy/copy493';
import { layout493 } from '../generated/layouts/layout493';
import { palette493 } from '../generated/palettes/palette493';

const RuntimeView493 = withUniwind(View);

export function Screen493() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView493 styleClassName={layout493.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy493.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy493.detail} / {palette493.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
