import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy344 } from '../generated/copy/copy344';
import { layout344 } from '../generated/layouts/layout344';
import { palette344 } from '../generated/palettes/palette344';

const RuntimeView344 = withUniwind(View);

export function Screen344() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView344 styleClassName={layout344.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy344.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy344.detail} / {palette344.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
