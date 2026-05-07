import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy578 } from '../generated/copy/copy578';
import { layout578 } from '../generated/layouts/layout578';
import { palette578 } from '../generated/palettes/palette578';

const RuntimeView578 = withUniwind(View);

export function Screen578() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView578 styleClassName={layout578.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy578.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy578.detail} / {palette578.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
