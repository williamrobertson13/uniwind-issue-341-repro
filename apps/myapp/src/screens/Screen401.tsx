import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy401 } from '../generated/copy/copy401';
import { layout401 } from '../generated/layouts/layout401';
import { palette401 } from '../generated/palettes/palette401';

const RuntimeView401 = withUniwind(View);

export function Screen401() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView401 styleClassName={layout401.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy401.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy401.detail} / {palette401.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
