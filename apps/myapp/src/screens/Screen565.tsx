import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy565 } from '../generated/copy/copy565';
import { layout565 } from '../generated/layouts/layout565';
import { palette565 } from '../generated/palettes/palette565';

const RuntimeView565 = withUniwind(View);

export function Screen565() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView565 styleClassName={layout565.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy565.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy565.detail} / {palette565.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
