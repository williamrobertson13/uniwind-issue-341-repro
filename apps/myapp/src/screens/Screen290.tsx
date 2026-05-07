import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy290 } from '../generated/copy/copy290';
import { layout290 } from '../generated/layouts/layout290';
import { palette290 } from '../generated/palettes/palette290';

const RuntimeView290 = withUniwind(View);

export function Screen290() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView290 styleClassName={layout290.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy290.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy290.detail} / {palette290.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
