import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy701 } from '../generated/copy/copy701';
import { layout701 } from '../generated/layouts/layout701';
import { palette701 } from '../generated/palettes/palette701';

const RuntimeView701 = withUniwind(View);

export function Screen701() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView701 styleClassName={layout701.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy701.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy701.detail} / {palette701.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
