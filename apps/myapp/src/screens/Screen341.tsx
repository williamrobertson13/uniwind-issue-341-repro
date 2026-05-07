import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy341 } from '../generated/copy/copy341';
import { layout341 } from '../generated/layouts/layout341';
import { palette341 } from '../generated/palettes/palette341';

const RuntimeView341 = withUniwind(View);

export function Screen341() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView341 styleClassName={layout341.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy341.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy341.detail} / {palette341.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
