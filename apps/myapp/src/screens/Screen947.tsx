import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy947 } from '../generated/copy/copy947';
import { layout947 } from '../generated/layouts/layout947';
import { palette947 } from '../generated/palettes/palette947';

const RuntimeView947 = withUniwind(View);

export function Screen947() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView947 styleClassName={layout947.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy947.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy947.detail} / {palette947.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
