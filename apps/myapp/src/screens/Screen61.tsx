import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy61 } from '../generated/copy/copy61';
import { layout61 } from '../generated/layouts/layout61';
import { palette61 } from '../generated/palettes/palette61';

const RuntimeView61 = withUniwind(View);

export function Screen61() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView61 styleClassName={layout61.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy61.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy61.detail} / {palette61.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
