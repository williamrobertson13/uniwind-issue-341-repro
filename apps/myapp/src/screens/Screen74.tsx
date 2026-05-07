import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy74 } from '../generated/copy/copy74';
import { layout74 } from '../generated/layouts/layout74';
import { palette74 } from '../generated/palettes/palette74';

const RuntimeView74 = withUniwind(View);

export function Screen74() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView74 styleClassName={layout74.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy74.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy74.detail} / {palette74.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
