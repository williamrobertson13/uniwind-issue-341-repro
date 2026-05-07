import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy233 } from '../generated/copy/copy233';
import { layout233 } from '../generated/layouts/layout233';
import { palette233 } from '../generated/palettes/palette233';

const RuntimeView233 = withUniwind(View);

export function Screen233() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView233 styleClassName={layout233.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy233.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy233.detail} / {palette233.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
