import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy365 } from '../generated/copy/copy365';
import { layout365 } from '../generated/layouts/layout365';
import { palette365 } from '../generated/palettes/palette365';

const RuntimeView365 = withUniwind(View);

export function Screen365() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView365 styleClassName={layout365.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy365.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy365.detail} / {palette365.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
