import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy449 } from '../generated/copy/copy449';
import { layout449 } from '../generated/layouts/layout449';
import { palette449 } from '../generated/palettes/palette449';

const RuntimeView449 = withUniwind(View);

export function Screen449() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView449 styleClassName={layout449.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy449.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy449.detail} / {palette449.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
