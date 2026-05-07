import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy901 } from '../generated/copy/copy901';
import { layout901 } from '../generated/layouts/layout901';
import { palette901 } from '../generated/palettes/palette901';

const RuntimeView901 = withUniwind(View);

export function Screen901() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView901 styleClassName={layout901.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy901.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy901.detail} / {palette901.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
